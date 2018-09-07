import React, { Fragment } from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
// import logo from '../assets/logo.svg';
import logo from '../assets/logo2.png';
import { getRoutes } from '../utils/utils';

const links = [{
  key: 'key',
  title: '官网',
  href: 'http://120.26.227.120',
}];

const copyright = <Fragment>Copyright <Icon type="copyright" /> 2018 重庆亲禾智千科技有限公司研发部出品</Fragment>;

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '道路健康评价管理系统';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 道路健康评价管理系统`;
    }
    return title;
  }
  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>道路健康评价管理系统</span>
                </Link>
              </div>
              {/* <div className={styles.desc}>王源是最帅的小哥哥</div> */}
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item =>
                (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                )
              )}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
