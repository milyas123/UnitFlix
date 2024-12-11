import {Suspense} from "react";
import LazyLoad from "react-lazyload";
import SpinnerContainer from "@/website/components/common/SpinnerContainer.jsx";
import {motion} from "framer-motion";
import PropTypes from "prop-types";

const AnimLazyLoader = ({variants, children, className, minHeight}) => {
    return (
        <>
            {
                variants ?
                    <motion.div variants={variants} initial={'initial'} whileInView={'inView'} viewport={{once: true}}>
                        <Suspense>
                            <LazyLoad className={`w-full min-h-[${minHeight ? minHeight : 200}px]`} placeholder={<SpinnerContainer/>}>
                                {children}
                            </LazyLoad>
                        </Suspense>
                    </motion.div> :
                    <Suspense>
                        <LazyLoad className={className ? className : `w-full min-h-[${minHeight ? minHeight : 200}px]`} placeholder={<SpinnerContainer/>}>
                            {children}
                        </LazyLoad>
                    </Suspense>
            }
        </>
    )
}

AnimLazyLoader.propTypes = {
    variants: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    minHeight: PropTypes.number,
}

export default AnimLazyLoader;