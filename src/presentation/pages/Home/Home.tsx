import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Button, Input, Layout } from "../../components";
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({name: '', from: undefined, to: undefined})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/results?name=${form.name}&from=${form.from}&to=${form.to}`);
    };

    return (
        <Layout>
            <h2>What Dragon Ball character are you looking for?</h2>
            <form onSubmit={handleSubmit}>
                <Input id="name" placeholder="Goku" text="Search by name" value={form.name} onChange={handleChange} />
                <div className="input-group">
                    <Input type="number" id="from" placeholder="From" text="Search by ki" value={form.from} onChange={handleChange} />
                    <Input type="number" hasLabel={false} id="to" placeholder="To" text="Search by ki" value={form.to} onChange={handleChange} />
                </div>
                <Button text="Search" />
            </form>
        </Layout>
    );
};

export default Home;