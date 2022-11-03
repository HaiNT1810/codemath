import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { requestPOST } from '../../../helpers/baseAPI'
import ReCAPTCHA from "react-google-recaptcha";
import {
  message,
  Form,
  Button,
  Input,
  Typography,
} from 'antd'

import './ContactWrapper.scss'

const Contact = () => {
  // define
  const [form] = Form.useForm();

  // handle
  const handleFinish = async value => {
    delete value.Captcha;
    let data = {
      token: '1',
      entity: value
    }
    const res = await requestPOST(`contact`, data);
    if (res.error.code == 200) {
      message.success('Thực hiện thành công');
      form.resetFields();
    }
    else {
      message.error('Thực hiện thất bại')
    }
  }

  return (
    <div className='content-container'>
      <div
        className="page-header"
      >
        <div className="contact">
          <h2>Thông tin liên hệ</h2>
          <ul className='contact-list'>
            <li className='contact-item'>
              <span className='contact-lable'>Cơ quan:</span> Ban quản lý các Khu công nghiệp tỉnh Vĩnh Phúc
            </li>
            <li className='contact-item'>
              <span className='contact-lable'>Địa chỉ:</span> Số 38 đường Nguyễn Trãi, phường Đống Đa, thành phố Vĩnh Yên
            </li>
            <li className='contact-item'>
              <span className='contact-lable'>Điện thoại:</span> 0211.3843 403 - Fax: 0211.3843 407 - <span className='contact-lable'>Email:</span> banqlckcn@vinhphuc.gov.vn
            </li>
          </ul>
          <span id='contact-border'></span>
        </div>
      </div>
      <div className='card-body'>
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item
            name='Title'
            label='Tiêu đề'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Tiêu đề'
            />
          </Form.Item>
          <Form.Item
            name='Name'
            label='Họ và tên'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Họ và tên'
            />
          </Form.Item>
          <Form.Item
            name='Address'
            label='Địa chỉ'
          >
            <Input.TextArea
              rows={2}
              style={{ width: '100%', borderRadius: 5 }}
              placeholder='Địa chỉ'
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
            name='PhoneNumber'
            label='Điện thoại'
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Điện thoại'
            />
          </Form.Item>
          <Form.Item
            name='DonViNhan'
            label='Đơn vị nhận'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Đơn vị nhận'
            />
          </Form.Item>
          
          <Form.Item
            name='Content'
            label='Nội dung'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Input.TextArea
              rows={4}
              style={{ width: '100%', borderRadius: 5 }}
              placeholder='Nội dung'
            />
          </Form.Item>
          <Form.Item
            name='Captcha'
            label='Xác thực'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <ReCAPTCHA
              className="form-recaptcha"
              sitekey={process.env.REACT_APP_CAPTCHA_KEY} />
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
                backgroundColor: '#B90504',
                borderColor: '#B90504',
              }}
            >
              <Typography.Text style={{ color: '#FFF', paddingLeft: 5 }}> {'Gửi'}</Typography.Text>
            </Button>
            <Button
              key='Cancle'
              type='primary'
              size='middle'
              style={{
                borderRadius: 5,
                width: 110,
                padding: '5px 12px',
                backgroundColor: '#FAFAFA',
                borderColor: '#BDBDBD',
              }}

              onClick={() => {
                form.resetFields()
              }}
            >
              <Typography.Text style={{ color: '#757575', paddingLeft: 5 }}> {'Nhập lại'}</Typography.Text>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

const ContactWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Nhà nước công dân',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      > Liên hệ
      </PageTitle>
      <Contact />
    </>
  )
}

export { ContactWrapper }
