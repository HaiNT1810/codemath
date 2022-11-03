import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useState, useEffect } from 'react'
import { requestPOST, requestGET } from '../../../helpers/baseAPI'
import ReCAPTCHA from "react-google-recaptcha";
import {
  message,
  Form,
  Button,
  Input,
  Typography,
  Select,
} from 'antd'
import './FeedbackWrapper.scss'

const Feedback = () => {
  const [form] = Form.useForm()
  const [sector, setSector] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await requestGET(`dmchungs/manhomdm/linhvucgopy`);
      if (res && res.data.length > 0)
        setSector(res.data)
    };
    fetchData();
    return () => { };
  }, []);

  const handleFinish = async value => {
    delete value.Captcha;
    let data = {
      token: '1',
      entity: value
    }
    const res = await requestPOST(`feedback`, data);
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
        <h2 className='content-header'>Góp ý</h2>
      </div>
      <div className='card-body'>
        <Form
          form={form}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleFinish}
        >
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
            name="LinhVucID"
            label="Lĩnh vực"
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Select
              placeholder="Lĩnh vực"
            >
              {sector && sector.map(st => <Select.Option key={st.ID} value={st.ID}>{st.Ten}</Select.Option>)}
            </Select>
          </Form.Item>
          
          <Form.Item
            name='Email'
            label='Email'
            rules={[
              {type: 'email', message: 'Định dạng email không đúng!'},
              { required: true, message: 'Không được để trống!' }
            ]}
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
            name='Content'
            label='Góp ý'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Input.TextArea
              rows={4}
              style={{ width: '100%', borderRadius: 5 }}
              placeholder='Nội dung góp ý'
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
              <Typography.Text style={{ color: '#FFF', paddingLeft: 5 }}> {'Gửi góp ý'}</Typography.Text>
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

const FeedbackWrapper = () => {
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
      > Góp ý
      </PageTitle>
      <Feedback />
    </>
  )
}

export { FeedbackWrapper }
