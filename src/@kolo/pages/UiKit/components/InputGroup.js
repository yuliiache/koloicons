import React, {useState} from 'react';
import {Input} from '@kolo/uiKit/Input/Input.js';

const InputGroup = () => {
  const [name, setName] = useState('');
  const [noPlaceholder, setNoPlaceholder] = useState('');
  const [disabled, setDisabled] = useState('');
  const [hint, setHint] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (newValue) => {
    setName(newValue);
  };

  const handleNoPlaceholderChange = (newValue) => {
    setNoPlaceholder(newValue);
  };

  const handleDisabledChange = (newValue) => {
    setDisabled(newValue);
  };

  const handleHintChange = (newValue) => {
    setHint(newValue);
  };

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  return (
    <div>
      <Input
        id="name"
        placeholder="Name"
        label="First Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        id="no_placeholder"
        label="Input without placeholder"
        value={noPlaceholder}
        onChange={handleNoPlaceholderChange}
      />
      <Input
        id="disabled"
        placeholder="Phone"
        label="Disabled"
        isDisabled
        value={disabled}
        onChange={handleDisabledChange}
      />
      <Input
        id="hint"
        placeholder="Nickname"
        label="Nickname"
        hint="This nickname will be displayed in your account"
        value={hint}
        onChange={handleHintChange}
      />
      <Input
        id="email"
        placeholder="Email"
        label="Email"
        errorMessage="Incorrect Data"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default InputGroup;
