import React, { useMemo, useState } from "react";
import { memo } from "react";
import  cls  from './UITest2.module.scss';
import { Button } from "ui/components/controls/buttons/Button";
import { Text } from "ui/components/shared/Text";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Checkbox } from "ui/components/controls/inputs/Checkbox";
import { RadioGroup } from "ui/components/controls/inputs/RadioGroup";
import { Slider } from "ui/components/controls/inputs/Slider";
import { Switcher } from "ui/components/controls/inputs/Switcher";
import { TextField } from "ui/components/controls/inputs/TextField";
import { TextArea } from "ui/components/controls/inputs/TextArea";
import { Link } from "ui/components/controls/links/Link";
import { Dropdown } from "ui/components/controls/popups";
import { Skeleton } from "ui/components/shared/Skeleton/Skeleton";
import { ListBox } from "ui/components/controls/popups";
import { Popover } from "ui/components/controls/popups";
import { RadioGroupOptionType } from "ui/components/controls/inputs/RadioGroup/components/RadioGroupOption/types/RadioGroupOptionProps";

export const UITest2 = memo(() => {
    const [checkbox, setCheckbox] = useState(false);

    const radioGroupOptions: RadioGroupOptionType[] = [
        {value: 'admin', description: 'Администратор'},
        {value: 'architecturer', description: 'Архитектор'},
        {value: 'root', description: 'root', disabled:true},
    ];
    const [sex, setSex] = useState('architecturer');
    const handleChangeSex = (value: string) =>{
      setSex(value)
    }
    useMemo(() => {
        console.log('current value for variable sex is', sex);
    }, [sex])



    const [sliderValue, setSliderValue] = useState(0);

    const [switcherValue, setSwitcherValue] = useState(false);



    const [textFieldValue, setTextFieldValue] = useState('');

    const [textAreaValue, setTextAreaValue] = useState('');



    const listItems = [
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Text>M1RoN</Text></HStack>), value: 'M1RoN' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Text>Alan_Masti</Text></HStack>), value: 'Alan_Masti' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Text>Le[G]ion_kirov_43rus</Text></HStack>), value: 'Le[G]ion_kirov_43rus' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Text>LaRGo</Text></HStack>), value: 'LaRGo' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Text>KonfeTK@</Text></HStack>), value: 'KonfeTK@' },
    ];
    const popoverItems = [
        { content: (<Skeleton height={70} width={200} />), value: '1' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '2' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '3' },
        { content: (<HStack gap="8"><Skeleton height={30} width={30} border='50%'/> <Skeleton height={30} width={100} /></HStack>), value: '4' },
        { content: (<HStack gap="8"><Skeleton height={50} width={50} border='50%'/> <Skeleton height={40} width={150} /></HStack>), value: '5' },
    ];
    const [listBoxValue, setListBoxValue] = useState('Alan_Masti');




    return (
        <VStack max gap="8" className={cls.UITest2}>
            <Button><Text>Click</Text></Button>

            <HStack gap="8" max>
                <Checkbox 
                    id="rule"
                    checked={checkbox}
                    onChange={() => setCheckbox(prev => !prev)}
                >
                    <Text>Check the rules</Text>
                </Checkbox>

                <RadioGroup 
                    name={'admins'}
                    options={radioGroupOptions}
                    onChange={handleChangeSex}
                />
            </HStack>

            <HStack gap="8" max>
                <Slider 
                    max={10}
                    min={0}
                    step={1}
                    value={sliderValue}
                    onChange={setSliderValue}
                />

                <Switcher 
                    id="1"
                    value={switcherValue}
                    onChange={() => setSwitcherValue(prev => !prev)}
                />
            </HStack>

            <HStack gap="8" max>
                <TextField 
                    value={textFieldValue}
                    onChange={setTextFieldValue}
                    label="TextField"
                    limit={20}
                    masked
                />
                <TextArea 
                    value={textAreaValue}
                    onChange={setTextAreaValue}
                    label="TextArea"
                    limit={64}
                />
            </HStack>

            <Link><Text>Link</Text></Link>

            <HStack gap="8" max>
                <Dropdown 
                    trigger={<Button><Text>Dropdown</Text></Button>}
                    items={listItems}
                />

                <ListBox 
                    value={listBoxValue}
                    onChange={setListBoxValue}
                    items={listItems}
                    label="Select"
                    defaultValue="Alan_Masti"
                />

                <Popover
                    trigger={<Button><Text>Trigger</Text></Button>}
                >
                    <>
                        {popoverItems.map(item => (
                            <div key={item.value}>
                                {item.content}
                            </div>
                        ))}
                    </>
                </Popover>
            </HStack>

            <VStack max align="center" gap="4">
                <Skeleton width={100} height={100} border="50%"/>
                <Skeleton width={500} height={100}/>
            </VStack>

   
            <VStack max gap="8">
                <Text font='title' size='title'>Шрифт Roboto для заголовоков, размер: TITLE</Text>
                <Text font='title' size='subtitle'>Шрифт Roboto для заголовоков, размер: SUBTITLE</Text>
                <Text font='title' size='important'>Шрифт Roboto для заголовоков, размер: IMPORTANT</Text>
                <Text font='title' size='regular'>Шрифт Roboto для заголовоков, размер: REGULAR</Text>
                <Text font='title' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>

            
                <Text font='title' color='main'>Шрифт Roboto для заголовоков, тема: основной</Text>
                <Text font='title' color='secondary'>Шрифт Roboto для заголовоков, тема: второстепенный</Text>
                <Text font='title' color='warning'>Шрифт Roboto для заголовоков, тема: предупреждение</Text>
                <Text font='title' color='error'>Шрифт Roboto для заголовоков, тема: ошибка</Text>
                <Text font='title' color='success'>Шрифт Roboto для заголовоков, тема: успешно выполнено</Text>
                <Text font='title' color='info'>Шрифт Roboto для заголовоков, тема: информация</Text>

                <Text font='main' size='title'>Шрифт Roboto основной, размер: TITLE</Text>
                <Text font='main' size='subtitle'>Шрифт Roboto основной, размер: SUBTITLE</Text>
                <Text font='main' size='important'>Шрифт Roboto основной, размер: IMPORTANT</Text>
                <Text font='main' size='regular'>Шрифт Roboto основной, размер: REGULAR</Text>
                <Text font='main' size='regularsmall'>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
            
                <Text font='main' color='main'>Шрифт Roboto основной, тема: основной</Text>
                <Text font='main' color='secondary'>Шрифт Roboto основной, тема: второстепенный</Text>
                <Text font='main' color='warning'>Шрифт Roboto основной, тема: предупреждение</Text>
                <Text font='main' color='error'>Шрифт Roboto основной, тема: ошибка</Text>
                <Text font='main' color='success'>Шрифт Roboto основной, тема: успешно выполнено</Text>
                <Text font='main' color='info'>Шрифт Roboto основной, тема: информация</Text>
            </VStack> 

        </VStack>
    );
});