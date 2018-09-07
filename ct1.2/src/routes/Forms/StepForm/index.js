import React, { PureComponent, Fragment } from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import { Card, Steps } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NotFound from '../../Exception/404';
import { getRoutes } from '../../../utils/utils';
import styles from '../style.less';

const { Step } = Steps;

export default class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info': return 0;
      case 'confirm': return 1;
      case 'result': return 2;
      default: return 0;
    }
  }
  render() {
    const { match, routerData } = this.props;
    return (
      <PageHeaderLayout>
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="填写基础信息" />
              <Step title="填写车行道信息" />
              <Step title="填写人行道信息" />
              <Step title="填写分隔带信息" />
              <Step title="填写附属设施信息" />
              <Step title="上传表格文件" />
              <Step title="完成" />
            </Steps>
            <Switch>
              {
                getRoutes(match.path, routerData).map(item => (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))
              }
              <Redirect exact from="/form/step-form" to="/form/step-form/info" />
              <Route render={NotFound} />
            </Switch>
          </Fragment>
        </Card>
      </PageHeaderLayout>
    );
  }
}
