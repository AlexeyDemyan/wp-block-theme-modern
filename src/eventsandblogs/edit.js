import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className='custom-placeholder-block'>Events and Blogs Placeholder</div>
    </div>
  );
}
