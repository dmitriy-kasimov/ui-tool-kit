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
import { Disclosure } from "ui/components/controls/accordions/Disclousure";
import { Icon } from "ui/components/shared/Icon";
import ArrowBottom from 'styles/assets/icons/arrow-bottom.svg'

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
            <Disclosure
                items={[
                    {
                    title: 'The rule #1', 
                    description: (<Text>Sometnhing very looooooooooooooooong </Text>),
                    },
                    {
                    title: 'The rule #2 [main rule]', 
                    description: (<VStack gap='8' max>
                        <Skeleton width={150} height={40}/>
                        <Skeleton width={250} height={30}/>
                        <Skeleton width={250} height={30}/>
                        <Skeleton width={250} height={250}/>
                        <Skeleton width={250} height={30}/>
                    </VStack>),
                    }
                ]}
            />

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
                    trigger={<Button addonRight={<Icon Svg={ArrowBottom} width={24} height={24} />}><Text>Dropdown</Text></Button>}
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
                    trigger={<Button addonRight={<Icon Svg={ArrowBottom} width={24} height={24} />}><Text>Trigger</Text></Button>}
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
                <Text font='xl'>This font for titles, his size is XL</Text>
                <Text font='l' >This font for titles, his size is L</Text>
                <Text font='m' >This font for texts, his size is M</Text>
                <Text font='s' >This font for texts, his size is S</Text>

                <Text font='m' color='main'>This text has the main color</Text>
                <Text font='m' color='secondary'>This text has the secondary color</Text>
                <Text font='m' color='warning'>This text has the warning color</Text>
                <Text font='m' color='error'>This text has the error color</Text>
                <Text font='m' color='success'>This text has the success color</Text>
                <Text font='m' color='info'>This text has the info color</Text>
            </VStack> 

        </VStack>
    );
});