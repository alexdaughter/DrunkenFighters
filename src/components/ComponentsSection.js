import React, { useEffect, useState } from "react";
import { getComponents } from "../services/fakeComponentsServices";
import "../stylesheets/us.scss";
import AvatarMember from "./AvatarMember";

export default function ComponentsSection (){
    const [ members, setMembers ] = useState(null);
    const [ message, setMessage ] = useState();

    const fetchData = async () => {
        try {
            const response = await getComponents();
            setMembers(response.data);
        } catch (ex) {
            setMessage('An error has ocurred');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

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