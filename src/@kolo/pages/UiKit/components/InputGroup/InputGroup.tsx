import Input from '@kolo/uiKit/Input/Input';
import {InputType} from '@kolo/uiKit/Input/InputType';
import React, {useState} from 'react';

import {Section} from '../Section/Section';

const InputGroup = () => {
  const [name, setName] = useState('');
  const [noPlaceholder, setNoPlaceholder] = useState('');
  const [disabled, setDisabled] = useState('');
  const [hint, setHint] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };

  const handleNoPlaceholderChange = (newValue: string) => {
    setNoPlaceholder(newValue);
  };

  const handleDisabledChange = (newValue: string) => {
    setDisabled(newValue);
  };

  const handleHintChange = (newValue: string) => {
    setHint(newValue);
  };

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  return (
    <Section title="Input">
      <div style={{maxWidth: '42.6rem'}}>
        <Input
          id="name"
          placeholder="Name"
          label="First Name"
          type={InputType.TEXT}
          value={name}
          onChange={handleNameChange}
        />
        <Input
          id="no_placeholder"
          label="Input without placeholder"
          type={InputType.TEXT}
          value={noPlaceholder}
          onChange={handleNoPlaceholderChange}
        />
        <Input
          id="disabled"
          placeholder="Phone"
          label="Disabled"
          isDisabled
          type={InputType.PHONE}
          value={disabled}
          onChange={handleDisabledChange}
        />
        <Input
          id="hint"
          placeholder="Nickname"
          label="Nickname"
          hint="This nickname will be displayed in your account"
          type={InputType.TEXT}
          value={hint}
          onChange={handleHintChange}
        />
        <Input
          id="email"
          placeholder="Email"
          label="Email"
          errorMessage="Incorrect Data"
          type={InputType.EMAIL}
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </Section>
  );
};

export default InputGroup;
