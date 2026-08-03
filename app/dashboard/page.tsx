import ProtectedRoute from '@/components/auth/ProtectedRoute'
import RoleProtectedRoute from '@/components/auth/RoleProtectedRoute'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowUpRight, Calendar, CreditCard, FileText, Home, ShieldCheck, Wrench } from 'lucide-react'
import React from 'react'

const DashboardPage = ({children}: { children: React.ReactNode }) => {
  return (
    <>
    <RoleProtectedRoute allowedRoles={['tenant']}>
        {children}
    </RoleProtectedRoute>
    </>
  )
}

export default DashboardPage