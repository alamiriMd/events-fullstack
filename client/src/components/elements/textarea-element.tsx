import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    textarea {
        border:none;
        resize:vertical;
        border-radius:5px;
        padding:5px;
        outline:1px solid var(--borderColor);
        max-height: 200px;
        min-height:50px;
        &:focus {
            outline:1px solid var(--specialColor1);
        }
    }
    .label__wrapper {
        width:100%;
        display: flex;
        justify-content: space-between;
        .length_counter {
            font-size:var(--fontSize12);
            color:rgba(0,0, 0, 0.5);
        }
    }
`
interface Props {
    placeholder?: string;
    title?: string;
    maxLength?: number;
    required?: boolean;
    onInput?: (value: string) => void;
    onFocus?: (value: any) => void;
    value: string;
    labelInnerText?: string;
    minLength?: number;
    onChange?:(value:string)=> void;
    autoFocus?:boolean;
}
export default function TextareaElement(props: Props): JSX.Element {
    const { value, labelInnerText, title, placeholder } = props;
    const textareaId = React.useId();
    const maxLength = props.maxLength !== undefined ? props.maxLength : 1000;
    const minLength = props.minLength !== undefined ? props.minLength : 0;
    const required = props.required !== undefined ? props.required : false;
    const onFocus = props.onFocus ? props.onFocus : (): void => { }
    const onInput = props.onInput ? props.onInput : (): void => { }
    const onChange = props.onChange ? props.onChange : (): void => { }
    const autoFocus = props.autoFocus? props.autoFocus: false;
    return (
        <Wrapper>
            <div className="label__wrapper">
                <label htmlFor={textareaId}>
                    <span>{(labelInnerText || "")}</span>
                    {required ?
                        <span className="red" title={required ? "Required" : ""}>*</span>
                        : null}
                </label>
                <span className="length_counter">{value.length}/{maxLength}</span>
            </div>
            <textarea
                id={textareaId}
                maxLength={maxLength}
                title={(title || "")}
                required={required}
                minLength={minLength}
                value={value}
                onChange={(e)=> onChange((e.target as HTMLTextAreaElement).value)}
                placeholder={(placeholder || '')}
                onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                onFocus={(e) => onFocus(e)}
                autoFocus={autoFocus}
            ></textarea>
        </Wrapper>
    )
}