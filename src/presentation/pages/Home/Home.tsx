import { useState } from "react";

import { Input, Layout } from "../../components";
import './Home.css'

const Home = () => {
    const [form, setForm] = useState({name: '', from: undefined, to: undefined})

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: event.target.value });
    };

    return (
        <Layout>
            <h2>What Dragon Ball character are you looking for?</h2>
            <form>
                <Input id="name" placeholder="Goku" text="Search by name" value={form.name} onChange={handleChangeName} />
                <div className="input-group">
                    <Input type="number" id="from" placeholder="From" text="Search by ki" value={form.from} onChange={handleChangeName} />
                    <Input type="number" hasLabel={false} id="to" placeholder="To" text="Search by ki" value={form.to} onChange={handleChangeName} />
                </div>
            </form>
        </Layout>
    );
};

export default Home;