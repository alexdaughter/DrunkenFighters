import React, { useEffect, useState } from "react";
import { getComponents } from "../services/fakeComponentsServices";
import "../stylesheets/us.scss";
import AvatarMember from "./AvatarMember";
// import componentsList from "../services/components.json";

export default function ComponentsSection (){
    const [ members, setMembers ] = useState(null);
    const [ message, setMessage ] = useState();

    const fetchData = () => {
        fetch('http://localhost:8000/components')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setMembers(data);
        });
        // try {
        //     const response = await getComponents();
        //     setMembers(response.components);
        //     console.log(response)
        // } catch (ex) {
        //     setMessage('An error has ocurred');
        // }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(members);

    return(
        <section className="container">
        <ul className="components-list">
            {members && members.map((member) => (
              <li key={member.id}>
                <AvatarMember member={member}/>
              </li>
            ))}
          </ul>
          {message && <p>{message}</p>}
        </section>
    );
} 