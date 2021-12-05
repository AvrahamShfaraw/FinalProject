import { useField } from "formik";
import { Form, Label, Select } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

export default function MySelectInput(proprs: Props) {
    const [field, meta, helpers] = useField(proprs.name)
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{proprs.label}</label>
            <Select
                clearable
                options={proprs.options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={proprs.placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}