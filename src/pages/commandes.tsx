import React, { useEffect, useState } from 'react';
import '../css/commandes.css';

const CommandesPage: React.FC<{ userId: string }> = ({ userId }) => {
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`/api/commandes?userId=${userId}`);
                const data = await response.json();
                setItems(data.items);
            } catch (error) {
                console.error('Erreur lors de la récupération des items commandés :', error);
            }
        };

        fetchItems();
    }, [userId]);

    return (
        <div className="container">
            <h2 className="page-title">Historique de vos commandes</h2>
            <ul className="order-list">
                {items.map((item, index) => (
                    <li key={index} className="order-item">
                        <span className="order-details">{item}</span>
                        <button className="order-button">Commander à nouveau</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommandesPage;