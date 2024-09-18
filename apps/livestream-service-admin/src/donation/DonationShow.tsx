import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LIVESTREAM_TITLE_FIELD } from "../livestream/LivestreamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="livestream_"
          source="livestream.id"
          reference="Livestream"
        >
          <TextField source={LIVESTREAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
