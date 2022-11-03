import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  Button,
  Input,
  Typography
} from 'antd'

import "./Styles.scss";
const { TextArea } = Input;
const { Text } = Typography

const CommentForm = ({
  type = "comment",
  handleSubmit,
  handleSubmitReply,
  cancelButton = false,
  setActive,
  parentID
}) => {

  const [form] = Form.useForm()

  // handle
  const handleFinish = (values) => {
  }

  return (
    <>
      <Form
        style={{width: '100%'}}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        form={form}
        onFinish={handleFinish}
      >
        <Form.Item
          name='Content'
          label='Bình luận'
          rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <TextArea
            rows={3}
            style={{ width: '100%', borderRadius: 5 }}
            placeholder='Bình luận của bạn'
          />
        </Form.Item>
        <Form.Item
          name='FullName'
          label='Họ và tên'
          rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <Input
            style={{ width: '100%', height: 32, borderRadius: 5 }}
            placeholder='Họ và tên'
          />
        </Form.Item>
        <Form.Item
          name='Email'
          label='Email'
          rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <Input
            style={{ width: '100%', height: 32, borderRadius: 5 }}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item
          name='Captcha'
          label='Xác thực'
          rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <ReCAPTCHA
            className="form-recaptcha"
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            onChange={value => console.log(value)} />
        </Form.Item>
        <div className='text-center pb-2'>
          <Button
            key='Ok'
            type='primary'
            htmlType='submit'
            size='middle'
            style={{
              borderRadius: 5,
              padding: '5px 12px',
              width: 110,
              marginRight: 20,
              backgroundColor: '#033e9b',
              borderColor: '#033e9b',
              float: 'right'
            }}
          >
            <Text style={{ color: '#FFF', paddingLeft: 5 }}> {'Gứi'}</Text>
          </Button>
        </div>
      </Form>
    </>
  );
};

export { CommentForm };
