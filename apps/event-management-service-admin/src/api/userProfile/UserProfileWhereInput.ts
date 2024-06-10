import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserProfileWhereInput = {
  country?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profileId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
