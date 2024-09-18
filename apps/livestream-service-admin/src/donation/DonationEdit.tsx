import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { LivestreamTitle } from "../livestream/LivestreamTitle";
import { UserTitle } from "../user/UserTitle";

export const DonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
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
    </Edit>
  );
};
