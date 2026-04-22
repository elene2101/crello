  export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

export const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Fix Layout Issues', description: 'Fix the padding on mobile', status: 'todo', priority: 'high', createdAt: new Date() },
  { id: '2', title: 'API Integration', description: 'Connect the dashboard to the backend', status: 'inprogress', priority: 'medium', createdAt: new Date() },
  { id: '3', title: 'Unit Testing', description: 'Write tests for the Auth service', status: 'done', priority: 'low', createdAt: new Date() },

  { id: '4', title: 'User Authentication', description: 'Implement login and signup flow', status: 'todo', priority: 'high', createdAt: new Date() },
  { id: '5', title: 'Database Setup', description: 'Configure PostgreSQL database', status: 'inprogress', priority: 'high', createdAt: new Date() },
  { id: '6', title: 'Error Handling', description: 'Improve global error handling', status: 'todo', priority: 'medium', createdAt: new Date() },
  { id: '7', title: 'Performance Optimization', description: 'Optimize rendering performance', status: 'inprogress', priority: 'low', createdAt: new Date() },
  { id: '8', title: 'UI Improvements', description: 'Enhance button styles and spacing', status: 'done', priority: 'low', createdAt: new Date() },
  { id: '9', title: 'Notifications', description: 'Add toast notifications for actions', status: 'todo', priority: 'medium', createdAt: new Date() },
  { id: '10', title: 'Deployment Setup', description: 'Prepare app for production deployment', status: 'done', priority: 'high', createdAt: new Date() },
];