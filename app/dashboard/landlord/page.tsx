import RoleProtectedRoute from '@/components/auth/RoleProtectedRoute'
import React from 'react'

const LandlordPage = () => {
  return (
    <>
    <RoleProtectedRoute allowedRoles={['landlord']}>
      <div>LandlordPage</div>
    </RoleProtectedRoute>
    </>
  )
}

export default LandlordPage