import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LivestreamTitle } from "../livestream/LivestreamTitle";
import { UserTitle } from "../user/UserTitle";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="livestream.id"
          reference="Livestream"
          label="livestream_"
        >
          <SelectInput optionText={LivestreamTitle} />
        </ReferenceInput>
        <TextInput label="message" multiline source="message" />
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
