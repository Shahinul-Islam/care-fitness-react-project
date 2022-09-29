import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4'>
            <div>
                <h3 className='font-bold my-3'>How does react works?</h3>
                <p>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                </p>
            </div>
            <div>
                <h3 className='font-bold my-3'>What are the differences between props and state?</h3>
                <p>
                    Props: The Data is passed from one component to another.It is Immutable.Props can be used with state and functional components.Props are read-only.
                </p>
                <p>
                    State: The Data is passed within the component only. It is Mutable. State can be used only with the state components/class component. State is both read and write.
                </p>
            </div>
            <div>
                <h3 className='font-bold my-3'>what are the uses of useEffect except load data?</h3>
                <p>
                    Running on state change: validating input field
                    Running on state change: live filtering
                    Running on state change: trigger animation on new array value
                    Running on props change: update paragraph list on fetched API data update
                    Running on props change: updating fetched API data to get BTC updated price
                </p>
            </div>
        </div>
    );
};

export default Blog;