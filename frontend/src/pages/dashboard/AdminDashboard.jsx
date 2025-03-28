 
import { Card, Row, Col, Statistic, Table, Button, Space, Progress } from 'antd';
import { 
  UserOutlined, 
  ShopOutlined, 
  DollarOutlined, 
  SafetyCertificateOutlined,
  TeamOutlined,
  FileTextOutlined
} from '@ant-design/icons';

const AdminDashboard = () => {
  // Mock data - replace with actual data from your backend
  const stats = {
    totalUsers: 150,
    totalCompanies: 45,
    totalRevenue: 75000,
    activeProjects: 85,
    totalFreelancers: 105,
    platformGrowth: 25
  };

  const recentUsers = [
    {
      key: '1',
      name: 'John Doe',
      role: 'Freelancer',
      joinDate: '2024-03-15',
      status: 'Active'
    },
    {
      key: '2',
      name: 'Tech Corp',
      role: 'Company',
      joinDate: '2024-03-14',
      status: 'Active'
    },
    // Add more mock data as needed
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="primary">View Profile</Button>
          <Button danger>Suspend</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Statistics Cards */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Total Users"
              value={stats.totalUsers}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Companies"
              value={stats.totalCompanies}
              prefix={<ShopOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={stats.totalRevenue}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Active Projects"
              value={stats.activeProjects}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Freelancers"
              value={stats.totalFreelancers}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Card>
            <Statistic
              title="Platform Growth"
              value={stats.platformGrowth}
              suffix="%"
              prefix={<SafetyCertificateOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Platform Overview */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} md={12}>
          <Card title="Platform Health">
            <div className="space-y-4">
              <div>
                <p>System Uptime</p>
                <Progress percent={99.9} status="active" />
              </div>
              <div>
                <p>User Satisfaction</p>
                <Progress percent={92} status="active" />
              </div>
              <div>
                <p>Project Completion Rate</p>
                <Progress percent={88} status="active" />
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Recent Activity">
            <div className="space-y-4">
              <p>• New company registration</p>
              <p>• Project payment processed</p>
              <p>• User reported issue</p>
              <p>• System maintenance completed</p>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Users Table */}
      <Card title="Recent Users" className="mb-6">
        <Table 
          columns={columns} 
          dataSource={recentUsers}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      {/* Admin Actions */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title="User Management">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button type="primary" block>Manage Users</Button>
              <Button block>View Reports</Button>
              <Button block>Handle Disputes</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Platform Settings">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button block>Update Terms</Button>
              <Button block>Configure Fees</Button>
              <Button block>System Settings</Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Analytics">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button block>View Analytics</Button>
              <Button block>Generate Reports</Button>
              <Button block>Export Data</Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;