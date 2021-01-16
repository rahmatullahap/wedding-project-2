export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** Time resolver */
  Time: any;
};

export type Attendance = {
  __typename?: 'Attendance';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  returnedAt?: Maybe<Scalars['Date']>;
  souvenirNo?: Maybe<Scalars['Int']>;
  guest?: Maybe<Guest>;
};

export type AttendanceData = {
  name?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  returnedAt?: Maybe<Scalars['Date']>;
  souvenirNo?: Maybe<Scalars['Int']>;
  guestId?: Maybe<Scalars['String']>;
};

export type AttendanceMutation = {
  __typename?: 'AttendanceMutation';
  addAttendance?: Maybe<Attendance>;
  updateAttendance?: Maybe<Attendance>;
  removeAttendance?: Maybe<Attendance>;
  returnById?: Maybe<Attendance>;
  returnBySouvenirNo?: Maybe<Attendance>;
};

export type AttendanceMutationAddAttendanceArgs = {
  data: AttendanceData;
};

export type AttendanceMutationUpdateAttendanceArgs = {
  id?: Maybe<Scalars['String']>;
  data: AttendanceData;
};

export type AttendanceMutationRemoveAttendanceArgs = {
  id: Scalars['String'];
};

export type AttendanceMutationReturnByIdArgs = {
  id: Scalars['String'];
};

export type AttendanceMutationReturnBySouvenirNoArgs = {
  souvenirNo: Scalars['String'];
};

export type AttendancePayload = {
  __typename?: 'AttendancePayload';
  count?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<Attendance>>>;
};

export type AttendanceQuery = {
  __typename?: 'AttendanceQuery';
  search?: Maybe<AttendancePayload>;
  attendanceById?: Maybe<Attendance>;
  totalGuest?: Maybe<Total>;
};

export type AttendanceQuerySearchArgs = {
  keyword?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type AttendanceQueryAttendanceByIdArgs = {
  id: Scalars['String'];
};

export type AttendanceQueryTotalGuestArgs = {
  onBuilding?: Maybe<Scalars['Boolean']>;
};

export type Guest = {
  __typename?: 'Guest';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  vip?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['Int']>;
};

export type GuestData = {
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  vip?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['Int']>;
};

export type GuestMutation = {
  __typename?: 'GuestMutation';
  addGuest?: Maybe<Guest>;
  updateGuest?: Maybe<Guest>;
  removeGuest?: Maybe<Guest>;
};

export type GuestMutationAddGuestArgs = {
  data: GuestData;
};

export type GuestMutationUpdateGuestArgs = {
  id?: Maybe<Scalars['String']>;
  data: GuestData;
};

export type GuestMutationRemoveGuestArgs = {
  id: Scalars['String'];
};

export type GuestPayload = {
  __typename?: 'GuestPayload';
  count?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<Guest>>>;
};

export type GuestQuery = {
  __typename?: 'GuestQuery';
  search?: Maybe<GuestPayload>;
  guestById?: Maybe<Guest>;
};

export type GuestQuerySearchArgs = {
  keyword?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type GuestQueryGuestByIdArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  guest?: Maybe<GuestMutation>;
  attendance?: Maybe<AttendanceMutation>;
};

/** time period */
export enum Period {
  Week = 'WEEK',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Semester = 'SEMESTER',
  Annual = 'ANNUAL'
}

export type Query = {
  __typename?: 'Query';
  guest?: Maybe<GuestQuery>;
  attendance?: Maybe<AttendanceQuery>;
};

/** sort direction */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Total = {
  __typename?: 'Total';
  total?: Maybe<Scalars['Int']>;
  totalInBuilding?: Maybe<Scalars['Int']>;
};

export type AddAttendanceMutationVariables = Exact<{
  data: AttendanceData;
}>;

export type AddAttendanceMutation = { __typename?: 'Mutation' } & {
  attendance?: Maybe<
    { __typename?: 'AttendanceMutation' } & {
      addAttendance?: Maybe<
        { __typename?: 'Attendance' } & Pick<
          Attendance,
          | 'id'
          | 'createdAt'
          | 'name'
          | 'detail'
          | 'count'
          | 'returnedAt'
          | 'souvenirNo'
        > & {
            guest?: Maybe<
              { __typename?: 'Guest' } & Pick<
                Guest,
                'id' | 'name' | 'nickname' | 'detail' | 'vip' | 'session'
              >
            >;
          }
      >;
    }
  >;
};

export type ReturnBySouvenirNoMutationVariables = Exact<{
  souvenirNo: Scalars['String'];
}>;

export type ReturnBySouvenirNoMutation = { __typename?: 'Mutation' } & {
  attendance?: Maybe<
    { __typename?: 'AttendanceMutation' } & {
      returnBySouvenirNo?: Maybe<
        { __typename?: 'Attendance' } & Pick<
          Attendance,
          | 'id'
          | 'createdAt'
          | 'name'
          | 'detail'
          | 'count'
          | 'returnedAt'
          | 'souvenirNo'
        >
      >;
    }
  >;
};

export type GetAttendancesQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetAttendancesQuery = { __typename?: 'Query' } & {
  attendance?: Maybe<
    { __typename?: 'AttendanceQuery' } & {
      search?: Maybe<
        { __typename?: 'AttendancePayload' } & Pick<
          AttendancePayload,
          'count'
        > & {
            results?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Attendance' } & Pick<
                    Attendance,
                    | 'id'
                    | 'createdAt'
                    | 'name'
                    | 'detail'
                    | 'count'
                    | 'returnedAt'
                    | 'souvenirNo'
                  > & {
                      guest?: Maybe<
                        { __typename?: 'Guest' } & Pick<
                          Guest,
                          | 'id'
                          | 'name'
                          | 'nickname'
                          | 'detail'
                          | 'vip'
                          | 'session'
                        >
                      >;
                    }
                >
              >
            >;
          }
      >;
    }
  >;
};

export type GetTotalGuestQueryVariables = Exact<{
  onBuilding?: Maybe<Scalars['Boolean']>;
}>;

export type GetTotalGuestQuery = { __typename?: 'Query' } & {
  attendance?: Maybe<
    { __typename?: 'AttendanceQuery' } & {
      totalGuest?: Maybe<
        { __typename?: 'Total' } & Pick<Total, 'total' | 'totalInBuilding'>
      >;
    }
  >;
};

export type GetGuestsQueryVariables = Exact<{
  keyword?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type GetGuestsQuery = { __typename?: 'Query' } & {
  guest?: Maybe<
    { __typename?: 'GuestQuery' } & {
      search?: Maybe<
        { __typename?: 'GuestPayload' } & Pick<GuestPayload, 'count'> & {
            results?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Guest' } & Pick<
                    Guest,
                    'id' | 'name' | 'nickname' | 'detail' | 'vip' | 'session'
                  >
                >
              >
            >;
          }
      >;
    }
  >;
};
