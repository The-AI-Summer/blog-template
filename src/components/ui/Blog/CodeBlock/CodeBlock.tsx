import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import React from 'react';

interface CodeBlockProps {
    children: {
        props: {
            className: string;
            children: string;
        };
    };
}

const CodeBlock: React.FC<CodeBlockProps> = (props: CodeBlockProps) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    const language = (matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : '') as Language;

    return (
        <Highlight
            {...defaultProps}
            code={props.children.props.children.trim()}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style }}>
                    {tokens.map((line, index) => {
                        const lineProps = getLineProps({ line, key: index });
                        return (
                            <div key={index} {...lineProps}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
