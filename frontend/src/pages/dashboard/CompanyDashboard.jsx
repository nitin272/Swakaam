import React from 'react';
import { Card, Row, Col, Statistic, Table, Button, Space } from 'antd';
import { 
  TeamOutlined, 
  ProjectOutlined, 
  DollarOutlined, 
  FileTextOutlined 
} from '@ant-design/icons';

const CompanyDashboard = () => {
  // Mock data - replace with actual data from your backend
  const stats = {
    activeProjects: 5,
    totalFreelancers: 12,
    totalBudget: 25000,
    completedProjects: 8
  };

  const recentProjects = [
    {
      key: '1',
      projectName: 'Website Redesign',
      freelancer: 'John Doe',
      status: 'In Progress',
      budget: 5000,
      deadline: '2024-04-15'
    },
    // Add more mock data as needed
  ];

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Freelancer',
      dataIndex: 'freelancer',
      key: 'freelancer',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
      render: (budget) => `$${budget}`,
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="primary">View Details</Button>
          <Button>Message</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Company Dashboard</h1>
      
      {/* Statistics Cards */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Projects"
              value={stats.activeProjects}
              prefix={<ProjectOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Freelancers"
              value={stats.totalFreelancers}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Budget"
              value={stats.totalBudget}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Completed Projects"
              value={stats.completedProjects}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Projects Table */}
      <Card title="Recent Projects" className="mb-6">
        <Table 
          columns={columns} 
          dataSource={recentProjects}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      {/* Quick Actions */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Quick Actions">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button type="primary" block>Post New Project</Button>
              <Button block>View All Projects</Button>
              <Button block>Manage Team</Button>
              <Button block>View Reports</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Recent Activity">
            <div className="space-y-4">
              <p>• New project proposal received</p>
              <p>• Project milestone completed</p>
              <p>• New freelancer joined team</p>
              <p>• Payment processed</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyDashboard;