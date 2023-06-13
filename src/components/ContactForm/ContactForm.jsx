import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { ButtonForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import { selectContact } from 'redux/selectors';

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };

    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field name="name" placeholder="Annie Copeland" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field
            placeholder="227-91-26"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    </Formik>
  );
};
