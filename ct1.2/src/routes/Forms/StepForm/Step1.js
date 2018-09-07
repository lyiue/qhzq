import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Input, Button, Icon  } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './style.less';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    lg: {span:2},
    md: { span: 2},
    sm: { span: 8 },
    xs: { span: 8 },
  },
  wrapperCol: {
    lg: {span:6},
    md: { span: 6},
    sm: { span: 16 },
    xs: { span: 16 },
  },
};

@Form.create()
class Step1 extends React.PureComponent {

  handleReset = () => {
    this.props.form.resetFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
          className="ant-advanced-search-form"
         // onSubmit={}
      >
        <Row gutter={24}>
          <Col span={6}>
            <FormItem label="道路名称">
              {getFieldDecorator("道路名称", {
                rules: [{
                  required: true,
                  message: '必填项!',
                }],
              })(
                <Input placeholder="请输入道路名称..." />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="设计单位">
              <Input placeholder="请输入设计单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="路幅宽度范围">
              <Input placeholder="请输入路幅宽度范围..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="所属乡镇">
              <Input placeholder="请输入所属乡镇..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="道路编号">
              <Input placeholder="请输入道路编号..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="施工单位">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="道路长度">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="管理分类">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="道路走向">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="道路等级">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="道路面积">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="管理单位">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="起点">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="路面等级">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="AADT">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="养护单位">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="终点">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="设计时速">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="交通量等级">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="建造年月">
              <Input placeholder="请输入施工单位..." />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">下一步</Button>
            {/* <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button> */}
          </Col>
        </Row>
      </Form>
      );
  }
}
export default connect(({ form }) => ({
  data: form.step,
}))(Step1);
