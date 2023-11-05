import React from 'react'

import Comments from '@/components/Comments'

const index = () => {
  return (
    <div className='flex-5'>
        <div className='flex flex-col gap-3 max-md:text-sm'>
            <p><b>Lorem ipsum dolo</b>, sit amet consectetur adipisicing elit. Temporibus inventore ullam id eum quam distinctio! Ex temporibus expedita cupiditate, itaque commodi earum vel facilis, aspernatur aut est ratione, nemo cumque.</p>
            <p><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</b> Incidunt nisi quasi, quo culpa repellendus consectetur corporis recusandae accusamus fugit numquam cumque voluptatem libero aliquam odit nam porro illo! Ipsum vero ducimus temporibus, at dolor a expedita possimus odio voluptate! Accusamus.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus optio corrupti, sapiente, quod rem vitae, esse ad iste voluptatibus unde ut necessitatibus eligendi!</p>
        </div>
        <Comments />
    </div>
  )
}

export default index