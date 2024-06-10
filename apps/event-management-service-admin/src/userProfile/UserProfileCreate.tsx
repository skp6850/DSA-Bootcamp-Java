import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="gender" source="gender" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="profileId" source="profileId" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
