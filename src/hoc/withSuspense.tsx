import React, {ComponentType, Suspense} from 'react';
import {Preloader} from "../components/common/Preloader/Preloader";

function WithSuspense<T>(Component: ComponentType<T>) {
    return (props: T) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component{...props} />
            </Suspense>
        );
    };
}

export default WithSuspense;