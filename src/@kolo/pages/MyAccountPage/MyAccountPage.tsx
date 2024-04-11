import Input from '@kolo/uiKit/Input/Input';
import {InputType} from '@kolo/uiKit/Input/InputType';
import React from 'react';

import styles from './MyAccountPage.module.scss';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const MyAccountPage: React.FC = () => {
  const testUser: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
  };

  const getFirstLetter = (str: string): string => {
    return str.charAt(0);
  };

  const fullName = `${testUser.firstName} ${testUser.lastName}`;

  const handleChange = (e: string): void => {
    console.log(e);
  };

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.circle}>{getFirstLetter(testUser.firstName)}</div>
          <section className={styles.userInfo}>
            <h1>{testUser.firstName}</h1>
            <p>{testUser.email}</p>
          </section>
        </div>
      </section>
      <div className={styles.inputGroup}>
        <Input
          id={'name'}
          value={fullName}
          onChange={handleChange}
          isDisabled
          type={InputType.TEXT}
          label={'Real Name'}
          hint={'First name & Last name'}
        />
        <Input
          id={'email'}
          value={testUser.email}
          onChange={handleChange}
          type={InputType.EMAIL}
          isDisabled
          label={'Email'}
        />
      </div>
    </main>
  );
};

export default MyAccountPage;
