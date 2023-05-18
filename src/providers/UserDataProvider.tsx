'use client';

import { useGetUserDataQuery } from '@/hooks/queries/useGetUserDataQuery';

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const { isSuccess } = useGetUserDataQuery();
  return <>{isSuccess ? children : <></>}</>;
}
