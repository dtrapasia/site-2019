// @flow
import React from 'react';

import Select from 'components/Select';
import MultiLine from 'components/MultiLine';
import FormContext from 'components/FormContext';
import { yn } from './selectOptions';

const OtherInfo = () => (
  <FormContext.Consumer>
    {({ data, errors, registerField }) => (
      <div className="scrolled-form">
        <Select
          label="Have you attended HackIllinois in the past?"
          placeholder="Yes or No"
          items={yn}
          onSelect={registerField('priorAttendance')}
          disableInput
          index={data.priorAttendance}
          error={errors.priorAttendance}
          errorMessage="Please select prior attendance"
        />
        <MultiLine
          label="Anything else you’d like us to know?"
          name="extraInfo"
          placeholder="Enter any other considerations such as if you have an unlisted dietary restriction."
          value={data.extraInfo}
          onChange={registerField('extraInfo')}
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default OtherInfo;
