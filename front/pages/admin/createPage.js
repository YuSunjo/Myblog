import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, ADD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import Router from 'next/router';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';

const CreatePage = () => {
  const { imagePaths, addPostDone } = useSelector((state) => {
    return state.post;
  });
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const imageInput = useRef();

  const onChangeText = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const onSubmit = useCallback(() => {
    // dispatch(addPost({ title, content }));
    if ((!title && !content) || !title.trim() || !content.trim()) {
      return alert('게시글을 작성해주세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', i);
    });
    formData.append('title', title);
    formData.append('content', content);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [title, content, imagePaths]);

  useEffect(() => {
    if (addPostDone) {
      setContent('');
      setTitle('');
      Router.replace('/');
    }
  }, [addPostDone]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });
  return (
    <AppLayout>
      <Form
        style={{ margin: '10px 0 20px' }}
        encType="multipart/form-data"
        onFinish={onSubmit}
      >
        <span>title</span>
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="title"
        />
        <Input.TextArea
          value={content}
          onChange={onChangeText}
          maxLength={140}
          placeholder="나는 공부중!"
        />
        <div>
          {/* 버튼 눌러서 이미지창 띄우기  type이 file인 것을 hidden했다가 ref로 클릭해줌 */}
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">
            쨱쨱
          </Button>
        </div>
        <div>
          {imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img
                  src={`http://localhost:8000/${v}`}
                  style={{ width: '200px' }}
                  alt={v}
                />
                <div>
                  <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </AppLayout>
  );
};

export default CreatePage;
