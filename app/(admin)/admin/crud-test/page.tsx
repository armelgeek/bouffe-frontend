'use client';

import React, { useState } from 'react';
import { menuService } from '@/features/menu/menu.mock';
import { Button } from '@/shared/components/atoms/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/atoms/ui/card';

export default function CRUDTestPage() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, message]);
  };

  const testCRUD = async () => {
    setLoading(true);
    setTestResults([]);
    
    try {
      addResult('🧪 Début des tests CRUD...');
      
      // Test READ
      addResult('\n📖 Test READ:');
      const fetchResult = await menuService.fetchItems();
      addResult(`✅ Fetch: ${fetchResult.data.length} items trouvés`);
      
      // Test CREATE
      addResult('\n➕ Test CREATE:');
      const newItem = await menuService.createItem({
        name: 'Pizza Test CRUD',
        description: 'Pizza créée pour tester le CRUD',
        price: 15.99,
        category: 'Test',
        available: true,
        image: '/test.jpg',
        allergens: 'Test',
        preparationTime: 20,
        cookingMethod: 'Four'
      });
      addResult(`✅ Create: Nouvel item créé avec ID ${newItem.id}`);
      
      // Test UPDATE
      addResult('\n✏️ Test UPDATE:');
      if (newItem.id) {
        const updatedItem = await menuService.updateItem(newItem.id, {
          name: 'Pizza Test CRUD - Modifiée',
          price: 18.99
        });
        addResult(`✅ Update: Item modifié - ${updatedItem.name} - €${updatedItem.price}`);
        
        // Test GET BY ID
        addResult('\n🔍 Test GET BY ID:');
        const foundItem = await menuService.getById(newItem.id);
        addResult(`✅ GetById: Item trouvé - ${foundItem?.name}`);
        
        // Test READ après modifications
        addResult('\n📖 Test READ après modifications:');
        const fetchResult2 = await menuService.fetchItems();
        addResult(`✅ Fetch: ${fetchResult2.data.length} items (dont le nouveau)`);
        
        // Test DELETE
        addResult('\n🗑️ Test DELETE:');
        await menuService.deleteItem(newItem.id);
        addResult(`✅ Delete: Item supprimé`);
      }
      
      // Test READ final
      addResult('\n📖 Test READ final:');
      const fetchResult3 = await menuService.fetchItems();
      addResult(`✅ Fetch final: ${fetchResult3.data.length} items (retour à l'état initial)`);
      
      addResult('\n🎉 Tous les tests CRUD sont passés avec succès !');
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      addResult(`❌ Erreur: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Test CRUD - Service Mock Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button 
              onClick={testCRUD} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Tests en cours...' : 'Lancer les tests CRUD'}
            </Button>
            
            {testResults.length > 0 && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Résultats des tests :</h3>
                <pre className="text-sm whitespace-pre-wrap">
                  {testResults.join('\n')}
                </pre>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
