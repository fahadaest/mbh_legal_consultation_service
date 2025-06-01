'use client';

import { FaTwitter, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useSubscribeEmailMutation } from '@/store/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslations } from 'next-intl';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function Footer() {
    const [subscribeEmail] = useSubscribeEmailMutation();
    const t = useTranslations();

    return (
        <footer className="bg-darkBrown text-white px-8 py-12 text-sm">
            <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-6 w-full">
                <div></div>

                <div className="flex items-center gap-6 ml-auto">

                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm, setSubmitting, setStatus }) => {
                            try {
                                await subscribeEmail(values.email).unwrap();
                                setStatus({ success: 'Subscribed successfully!' });
                                resetForm();
                            } catch (error) {
                                if (error?.status === 409) {
                                    setStatus({ error: 'Email is already subscribed.' });
                                } else {
                                    setStatus({ error: 'Something went wrong. Please try again.' });
                                }
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting, status }) => (
                            <Form className="flex items-center gap-2 relative">
                                <div className="relative">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder={t('email')}
                                        className="px-4 py-2 pr-24 rounded text-black w-full"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="absolute top-1/2 right-1 -translate-y-1/2 bg-darkBrown rounded-md text-white px-4 py-1"
                                    >
                                        {isSubmitting ? '...' : t('subscribe')}
                                    </button>
                                </div>
                                <ErrorMessage name="email" component="div" className="text-red-400 text-xs absolute -bottom-5 left-0" />
                                {status?.error && <div className="text-red-400 text-xs absolute -bottom-5 right-0">{status.error}</div>}
                                {status?.success && <div className="text-green-400 text-xs absolute -bottom-5 right-0">{status.success}</div>}
                            </Form>
                        )}
                    </Formik>

                    <span className="hidden md:inline-block">{t('contacts')}</span>

                    <div className="flex gap-4 text-white">
                        <a href="#" aria-label="Twitter" className="hover:text-gray-700">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-gray-700">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Google" className="hover:text-gray-700">
                            <FaGoogle size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center text-gray-400">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white">{t('footerAbout')}</a>
                    <a href="#" className="hover:text-white">{t('ourStrategy')}</a>
                    <a href="#" className="hover:text-white">{t('ourAdvantages')}</a>
                    <a href="#" className="hover:text-white">{t('socialResponsibility')}</a>
                    <a href="#" className="hover:text-white">{t('ourServices')}</a>
                </div>

                <div>{t('footerRights')}</div>
            </div>
        </footer>
    );
}