import cn from 'classnames';
import React from 'react';
import './Group.scss';

/*
The Group components is a flex-row container that can be parameterized based on the number of children
It passes a group-x className  to all its direct children wich defines their behavior.
Those classes parameterized the flex-basis, max-width  nd media queries based on the number of children.

Caveat here is that due to the import order, we have to make sure that the component style will not override the flex attributes

e.g <Group className="group" size=3>
      <div className="group-3"/>
      <div className="group-3"/>
      <div className="group-3"/>
    </Group>
    
    .group {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .group-3 {
        flex-basis: calc(100% / 3 - 30px);
        flex-shrink: 0;
        max-width: calc(100% / 3 - 30px);

        @media only screen and (max-width: $breakpoint-sm) {
            & {
                flex-basis: calc(100% - 30px);
                max-width: calc(100% - 30px);
            }
        }
    }

*/

interface GroupProps {
    size: number;
    children?: React.ReactNode;
    className?: string;
}

const Group: React.FC<GroupProps> = (props: GroupProps) => {
    return (
        <div className={cn('group', props.className)}>
            {React.Children.map(props.children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                          className: cn(
                              child.props.className,
                              `group-${props.size}`
                          )
                      })
                    : child
            )}
        </div>
    );
};

export default Group;
