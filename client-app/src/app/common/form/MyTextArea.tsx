import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export default function MyTextArea(proprs: Props) {
    const [field, meta] = useField(proprs.name)



    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{proprs.label}</label>
            <textarea  {...field} {...proprs} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}