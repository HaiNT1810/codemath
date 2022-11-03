import { useIntl } from 'react-intl'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { Tree } from "antd";
import './TreePageWrapper.scss'

const { TreeNode } = Tree;
const hierarchy = [
  {
    id: 1,
    title: "Trang chủ",
    parentID: "#",
    link: "#/portal/home",
    child: [
      {
        id: 2,
        title: "Giới thiệu tổng quan",
        parentID: "1",
        link: "#/portal/about/function",
        child: [
          {
            id: 3,
            title: "Chức năng",
            parentID: null,
            link: "#/portal/about/function",
            child: []
          },
          {
            id: 4,
            title: "Nhiệm vụ",
            parentID: null,
            link: "#/portal/about/misson",
            child: []
          }
        ]
      },
      {
        id: 5,
        title: "Dữ liệu tổng thể",
        parentID: 1,
        link: "#/portal/overall-data",
        child: []
      },
      {
        id: 6,
        title: "Nhà nước công dân",
        parentID: "1",
        link: "#/portal/interactive/feedback",
        child: [
          {
            id: 7,
            title: "Góp ý",
            parentID: 6,
            link: "#/portal/interactive/feedback",
            child: []
          },
          {
            id: 8,
            title: "Liên hệ",
            parentID: 6,
            link: "#/portal/interactive/contact",
            child: []
          }
        ]
      },
      {
        id: 9,
        title: "Cơ chế chính sách",
        parentID: 1,
        link: "#/portal/policy",
        child: []
      },
      {
        id: 10,
        title: "Tuyển dụng",
        parentID: 1,
        link: "#/portal/policy",
        child: []
      },
      {
        id: 11,
        title: "Nộp báo cáo trực tuyến",
        parentID: 1,
        link: "#/portal/submit-report",
        child: []
      },
      {
        id: 12,
        title: "Hướng dẫn",
        parentID: "1",
        link: "#/portal/guild",
        child: []
      }
    ]
  }
];


const renderTreeNodes = (data) =>
  data.map((item) => {
    if (item.child) {
      return (
        <TreeNode
          selectable={false}
          title={<a href={item.link}>{item.title}</a>}
          key={item.id}
          dataRef={item}
        >
          {renderTreeNodes(item.child)}
        </TreeNode>
      );
    }
    return <TreeNode key={item.key} {...item} />;
  });

const TreePage = () => {
  return <div className='content-container'>
    <div
      className="page-header"
    >
      <h2 className='header-title'>Sơ đồ trang</h2>
    </div>
    <div
      className="article-content"
    >
      <Tree showLine={{ showLeafIcon: false }} defaultExpandAll={true}>
        {renderTreeNodes(hierarchy)}
      </Tree>
    </div>
  </div>
}

const TreePageWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Sơ đồ trang',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      >
      </PageTitle>
      <TreePage />
    </>
  )
}

export { TreePageWrapper }
