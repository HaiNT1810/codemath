import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  Button,
  Input,
  Typography,
  Select
} from 'antd'
import './QuestionWrapper.scss'

const { TextArea } = Input
const { Text } = Typography
const { Option } = Select
const handleFinish = () => { }
const Question = () => {
  const [form] = Form.useForm();
  return <div className='content-container'>
    <div
      className="page-header"
    >
      <h2 className='header-title'>Hỏi đáp</h2>
    </div>
    <div
      className="article-content"
    >
      <div className="form-question">
        <Form

          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          form={form}
          onFinish={handleFinish}
        >
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
            rules={[
              { type: 'email', message: 'Định dạng email không đúng!' },
              { required: true, message: 'Không được để trống!' }
            ]}
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Email'
            />
          </Form.Item>
          <Form.Item
            name='Phone'
            label='Điện thoại'
          >
            <Input
              style={{ width: '100%', height: 32, borderRadius: 5 }}
              placeholder='Điện thoại'
            />
          </Form.Item>
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
            name="Sector"
            label="Lĩnh vực"
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <Select
              placeholder="Lĩnh vực"
            >
              <Option value="1">Xã hội</Option>
              <Option value="2">Kinh tế - ngân sách</Option>
              <Option value="3">Văn hoá</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='Feedback'
            label='Nội dung câu hỏi'
            rules={[{ required: true, message: 'Không được để trống!' }]}
          >
            <TextArea
              rows={4}
              style={{ width: '100%', borderRadius: 5 }}
              placeholder='Nội dung câu hỏi'
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
              onChange={(value) => console.log(value)} />
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
              <Text style={{ color: '#FFF', paddingLeft: 5 }}> {'Gứi'}</Text>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
}

const QuestionWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Hỏi đáp',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      >
      </PageTitle>
      <Question />
    </>
  )
}

export { QuestionWrapper }
