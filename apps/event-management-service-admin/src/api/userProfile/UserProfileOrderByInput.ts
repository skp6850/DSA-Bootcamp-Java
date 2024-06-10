import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profileId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
