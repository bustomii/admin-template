import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <>
            <Head title="Confirm Password" />
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-xl sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 relative">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div>
                                <img src="/assets/icons/logo-black.png" alt="Astronacci" className='w-56' />
                            </div>
                            <div className="w-full mt-8">
                                <div className='text-center px-10 flex justify-center'>
                                    <div className="mb-4 text-sm text-gray-600 w-3/4">
                                        This is a secure area of the application. Please confirm your password before continuing.
                                    </div>
                                </div>
                                <form onSubmit={submit}>
                                    <div className="mx-auto max-w-xs">
                                        <input
                                            required
                                            value={data.password}
                                            className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#F4273A] focus:ring-0 focus:bg-white"
                                            type="password" placeholder="Email"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                        <InputError message={errors.password} className="mt-2" />
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-[#F4273A] text-gray-100 w-full py-4 rounded-lg hover:bg-[#FFBD51] hover:text-black hover:font-bold transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <span className="ml-3">
                                                Email Password Reset Link
                                            </span>
                                        </button>
                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree to abide by Astronacci International &nbsp;
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service
                                            </a>&nbsp;
                                            and its&nbsp;
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Privacy Policy
                                            </a>
                                        </p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#F4273A] bg-opacity-5 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/assets/images/login.png')`
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
