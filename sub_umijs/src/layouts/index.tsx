import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">子应用首页</Link>
        </li>
        <li>
          <Link to="/page-a">子应用页面A</Link>
        </li>
        <li>
          <Link to="/page-b">子应用页面A</Link>
        </li>
        <li>
          <a href="/">返回主应用</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
