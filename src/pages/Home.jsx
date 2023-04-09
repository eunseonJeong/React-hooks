import React from 'react'

function Home() {

    const contents = [
        {
            tab: "Section 1",
            content: "세션 1!!!"
        },
        {
            tab: "Section 2",
            content: "세션 2!!!"
        },
    ];

    return (
        <div>
            <h1>왜 안되지?</h1>
            {
                contents.map((item) => (
                    <button key={item.id}>
                        {item.tab}
                    </button>
                ))
            }
        </div>
    )
};

export default Home