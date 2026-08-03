import RoleProtectedRoute from '@/components/auth/RoleProtectedRoute'
import React from 'react'

const AdminPage = () => {
  return (
    <>
    <RoleProtectedRoute allowedRoles={['admin']}>
      <div>
        This Protected is admin page
      </div>
    </RoleProtectedRoute>
    </>
  )
}

export default AdminPage