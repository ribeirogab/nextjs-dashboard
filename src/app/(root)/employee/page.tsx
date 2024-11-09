import { type SearchParams } from 'nuqs/server';
import React from 'react';

import { EmployeeListingPage } from './_components/employee-listing-page';
import { searchParamsCache } from '@/lib/search-params';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard: Employees',
};

export default async function Employee({ searchParams }: PageProps) {
  searchParamsCache.parse(await searchParams);

  return <EmployeeListingPage />;
}
