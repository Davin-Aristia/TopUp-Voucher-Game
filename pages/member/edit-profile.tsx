import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Input from '../../Components/atoms/Input';
import SideBar from '../../Components/organisms/SideBar';
import { jwtPayloadTypes, UserTypes } from '../../services/data-types';
import { getProfile, updateProfile } from '../../services/member';

export default function EditProfile() {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        avatar: '',
        phoneNumber: '',
    });
    const [name, setName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const router = useRouter();
    const IMG = process.env.NEXT_PUBLIC_IMG;

    const getProfileName = useCallback(async () => {
        const data = await getProfile();
        setName(data.data.name);
    }, []);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token){
            const jwtToken = atob(token);
            const payload: jwtPayloadTypes = jwtDecode(jwtToken);
            const userFromPayload: UserTypes = payload.player;
            setUser(userFromPayload);
            getProfileName();
        }
    }, []);

    const onSubmit = async () => {
        const data = new FormData();

        data.append('image', user.avatar);
        data.append('username', user.username);
        data.append('name', name);
        data.append('phoneNumber', user.phoneNumber);
        const response = await updateProfile(data);
        if (response.error){
            toast.error(response.message);
        } else {
            Cookies.remove('token');
            router.push('/sign-in');
        }
    };
  return (
    <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings" />
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="icon upload" width={90} height={90} style={{ borderRadius: '100%' }} />
                                    ) : (
                                        <img src={`${IMG}/${user.avatar}`} alt="icon upload" width={90} height={90} style={{ borderRadius: '100%' }} />
                                    )}
                                </label>
                                <input
                                    id="avatar"
                                    type="file"
                                    name="avatar"
                                    accept="image/png, image/jpeg"
                                    onChange={(event) => {
                                        const img = event.target.files[0];
                                        setImagePreview(URL.createObjectURL(img));
                                        return setUser({
                                            ...user,
                                            avatar: img,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="pt-30">
                            <Input label="Full Name" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="pt-30">
                            <Input label="Username" value={user.username} onChange={(event) => setUser({
                                ...user,
                                username: event.target.value,
                            })}
                            />
                        </div>
                        <div className="pt-30">
                            <Input label="Email Address" value={user.email} disabled />
                        </div>
                        <div className="pt-30">
                            <Input label="Phone" value={user.phoneNumber} onChange={(event) => setUser({
                                ...user,
                                phoneNumber: event.target.value,
                                })}
                            />
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill" onClick={onSubmit}>Save My Profile</button>
                        </div>
                    </form>

                </div>

            </div>
        </main>
    </section>
  );
}
//
