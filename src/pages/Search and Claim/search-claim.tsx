import React, { useState } from 'react';
import { Tabs, Input, Button, Select } from 'antd';
import type { TabsProps } from 'antd';

const { Option } = Select;

const SearchAndClaim: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        console.log('Search value:', e.target.value);
    };

    const handleSearchClick = () => {
        console.log('Search button clicked with value:', searchValue);
    };

    const handleCategoryChange = (value: string) => {
        console.log('Selected category:', value);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <span style={{ fontSize: '18px' }}>Item Type</span>,
            children: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <Input
                        placeholder="Search item type..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        style={{ fontSize: '16px', padding: '10px', width: '30%' }}
                    />
                    <Button
                        type="primary"
                        onClick={handleSearchClick}
                        style={{ fontSize: '16px', padding: '21px' }}
                    >
                        Search
                    </Button>
                </div>
            ),
        },
        {
            key: '2',
            label: <span style={{ fontSize: '18px' }}>Picture</span>,
            children: (
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            style={{ fontSize: '16px', padding: '10px', width: '30%' }}
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                        const previewImage = document.getElementById('image-preview') as HTMLImageElement;
                                        if (previewImage && event.target) {
                                            previewImage.src = event.target.result as string;
                                            previewImage.style.display = 'block';
                                        }
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        <Button type="primary" style={{ fontSize: '16px', padding: '20px' }}>
                            Upload
                        </Button>
                    </div>
                    <img
                        id="image-preview"
                        alt="Preview"
                        style={{
                            display: 'none',
                            marginTop: '10px',
                            maxWidth: '100%',
                            maxHeight: '200px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
            ),
        },
        {
            key: '3',
            label: <span style={{ fontSize: '18px' }}>Category</span>,
            children: (
                <div style={{ marginBottom: '20px' }}>
                    <Select
                        id="category-select"
                        style={{ fontSize: '16px', width: '30%', minHeight: '45px' }}
                        onChange={handleCategoryChange}
                        placeholder="Select category"
                    >
                        <Option value="electronics">Electronics</Option>
                        <Option value="clothing">Clothing</Option>
                    </Select>&nbsp;
                    <Button type="primary" style={{ fontSize: '16px', padding: '20px' }}>
                        Search
                    </Button>
                </div>
            ),
        },
    ];

    return <Tabs defaultActiveKey="1" items={items} onChange={(key) => console.log('Tab changed to:', key)} />;
};

export default SearchAndClaim;